# Command Line

## Unix commands

[Bash cheatsheet](https://devhints.io/bash)

- `man` - manual pages. Type `man command_name` to get information about a specific command. For example, type `man ls` for more details on the `ls` command.
- `ls` - list files in a directory.
- `cd` - change the current working directory.
- `pwd` - print the name of the current working directory.
- `mkdir` - make directories.
- `rm` - remove file(s).
- `cp` or `copy` - copy file(s) from one place to another.
- `mv` or `rename` - move or rename file(s).
- `cat` - concatenate and display file contents.
- `touch` - create a new empty file, or modify the access and modification times of an existing file.
- `pbcopy` (macOS only) - pipe output to clipboard.
- `less` - view a file one page at a time.
- `grep` - search for a pattern in one or more files.
- `chmod` - change the permissions of a file.
- `find` - locate files based on various criteria.
- `sort` - sort lines of text.
- `uniq` - eliminate duplicate lines from input.
- `vim`/`nano`/etc. - edit files using an interactive editor.
- `nano`, `vi` - edit files using the nano editor.

**A simple bash script**
type: `vim myscript.sh` to create the file.

```bash
#!/bin/bash
echo "Hello World!"
```

changes permissions to make file executable: `chmod +x myscript.sh`.
Now you can run it with `./myscript.sh`.

## Pipes

Commands can be chained together using pipes (`|`), which allows the output of one command to become the input of another command.

Example:

```bash
cat file1.txt | wc -w
```

## Redirection

- Standard input: `<`
- Standard output: `>` / `|&`
- Error: `2>` / `2>&1`

Example:

```bash
bash> echo "Hello World!" > out.txt
bash> cat < out.txt
Hello World!

bash> ls non_existent_file &>/dev/null
```

## Grep

[Grep cheatsheet](https://devhints.io/grep)

Global regular expression print.

`grep sam names.txt`
