# Hex-To-Int Converter for R.java

## Purpose:
This plugin converts the Hexadecimal values in R.java that is obtained from decompiling android apk/aar/aab into their equivalent unsigned integer values so that it can be used to locate the resources in java/kotlin code (which was most likely obtained by decompiling android classes).

## How it works
- performs a regex search of all 8-char hex value of format (0xhhhhhhhh) that is assigned to public static final int field.
- replaces all the found matches with their equivalent integer values from the obtained hex values.

## How to build from source:
```
git clone https://github.com/mahee96/vsix-hex2int-rjava
npm install 
npm install -g vsce
vsce package
```


## How to Use:

1. Install plugin from vscode marketplace
2. Right-click on the R.java file to show context menu in explorer or Right-click anywhere on the editor with the R.java file openend to show the context menu entry "Hex-To-Int for R.java"
3. Now select the entry "Hex-To-Int for R.java" to perform conversion for the whole R.java file.

**NOTE**: When a selection is active in the editor, then the replacements are confined to the selection space only.


