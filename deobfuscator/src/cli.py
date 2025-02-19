import click
from rich.console import Console
from rich.panel import Panel
from rich.progress import Progress
import jsbeautifier
from pathlib import Path

console = Console()

def process_chunk(code: str, chunk_size: int):
    """Process code in chunks"""
    lines = code.splitlines()
    for i in range(0, len(lines), chunk_size):
        yield '\n'.join(lines[i:i + chunk_size])

def deobfuscate_chunk(chunk: str) -> str:
    """Deobfuscate a chunk of JavaScript code"""
    # Format code
    opts = jsbeautifier.default_options()
    opts.indent_size = 2
    opts.space_in_empty_paren = True
    opts.break_chained_methods = True
    opts.keep_array_indentation = True
    formatted = jsbeautifier.beautify(chunk, opts)
    return formatted

@click.command()
@click.argument('input_file', type=click.Path(exists=True))
@click.option('-c', '--chunk-size', default=1000, help='Lines per chunk')
@click.option('-v', '--verbose', is_flag=True, help='Show detailed output')
@click.option('-o', '--output', help='Output file name')
def main(input_file, chunk_size, verbose, output):
    """JavaScript Deobfuscator Tool"""
    console.print("[bold blue]JavaScript Deobfuscator Tool[/bold blue]")

    try:
        # Read input file
        with open(input_file, 'r', encoding='utf-8') as f:
            code = f.read()
        
        original_size = len(code)
        console.print(f"\nProcessing file: {input_file}")
        console.print(f"Original size: {original_size:,} bytes")
        console.print(f"Processing in chunks of {chunk_size} lines")

        # Process chunks
        deobfuscated = []
        total_chunks = (len(code.splitlines()) + chunk_size - 1) // chunk_size

        with Progress() as progress:
            task = progress.add_task("Processing chunks...", total=total_chunks)
            
            for i, chunk in enumerate(process_chunk(code, chunk_size)):
                if verbose:
                    console.print(f"\n[yellow]Processing chunk {i+1}/{total_chunks}[/yellow]")
                
                formatted = deobfuscate_chunk(chunk)
                deobfuscated.append(formatted)
                progress.update(task, advance=1)

        # Combine chunks
        final_code = '\n'.join(deobfuscated)
        
        # Save output
        output_file = output if output else input_file + '.deobfuscated.js'
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(final_code)
        
        # Calculate stats    
        final_size = len(final_code)
        reduction = ((original_size - final_size) / original_size) * 100

        # Show results
        console.print(Panel.fit(
            "[bold green]Processing completed![/bold green]\n" +
            f"Input file: {input_file}\n" +
            f"Output file: {output_file}\n" +
            f"Original size: {original_size:,} bytes\n" +
            f"Final size: {final_size:,} bytes\n" +
            f"Size reduction: {reduction:.1f}%\n" +
            f"Chunks processed: {total_chunks}",
            title="Summary"
        ))

    except Exception as e:
        console.print(f"[bold red]Error:[/bold red] {str(e)}")
        raise click.Abort()

if __name__ == '__main__':
    main()
