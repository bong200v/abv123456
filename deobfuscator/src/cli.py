import click
import jsbeautifier
import esprima

@click.command()
@click.argument('input_file')
@click.option('--output', help='Output file')
def process(input_file, output):
    # Đọc file input
    with open(input_file, 'r') as f:
        code = f.read()
    
    # Logic xử lý 1000 dòng ở đây
    processed = jsbeautifier.beautify(code)
    
    # Ghi ra file output
    out_file = output or input_file + '.deob.js'
    with open(out_file, 'w') as f:
        f.write(processed)
        
if __name__ == '__main__':
    process()
