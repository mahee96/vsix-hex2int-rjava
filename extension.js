const vscode = require('vscode');

function hexToUnsignedInt(hexValue) {
    const intValue = parseInt(hexValue.substring(2), 16);
    return intValue >>> 0; // Convert to unsigned integer
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('hex2int.convert', function () {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedText = document.getText(selection);

            let range;
            let textToReplace;

            if (selectedText.trim() === '') {
                range = new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length)
                );
                textToReplace = document.getText(range);
            } else {
                range = selection;
                textToReplace = selectedText;
            }

            const replacedText = textToReplace.replace(/(\s+public\s+static\s+final\s+int\s+[a-zA-Z_][a-zA-Z0-9_]*)\s+=\s+0x([0-9a-fA-F]{8});/g, (match, fieldDeclaration, hexValue) => {
                const intValue = hexToUnsignedInt(`0x${hexValue}`);
                return `${fieldDeclaration} = ${intValue};`;
            });

            editor.edit(builder => {
                builder.replace(range, replacedText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
