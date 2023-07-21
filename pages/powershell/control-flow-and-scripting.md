# Control Flow and Scripting in PowerShell

## Conditional Statements (if, else, switch)

Conditional statements in PowerShell allow you to make decisions in your scripts based on certain conditions. The most commonly used conditional statements are `if`, `else`, and `switch`.

### if Statement:

The `if` statement executes a block of code if a specified condition is true. The basic syntax is as follows:

```powershell
if (condition) {
    # Code block to execute if the condition is true
}
```

For example:

```powershell
$number = 42

if ($number -eq 42) {
    Write-Output "The number is 42."
}
```

### else Statement:

The `else` statement is used with the `if` statement to execute a different block of code when the specified condition is false. The basic syntax is:

```powershell
if (condition) {
    # Code block to execute if the condition is true
} else {
    # Code block to execute if the condition is false
}
```

For example:

```powershell
$number = 42

if ($number -eq 42) {
    Write-Output "The number is 42."
} else {
    Write-Output "The number is not 42."
}
```

### switch Statement:

The `switch` statement is useful when you have multiple conditions to check. It provides a more concise way to handle multiple `if-else` conditions. The basic syntax is:

```powershell
switch (expression) {
    value1 { code block 1 }
    value2 { code block 2 }
    value3 { code block 3 }
    default { code block if none of the values match }
}
```

For example:

```powershell
$fruit = "banana"

switch ($fruit) {
    "apple" { Write-Output "It's an apple." }
    "banana" { Write-Output "It's a banana." }
    "orange" { Write-Output "It's an orange." }
    default { Write-Output "It's a different fruit." }
}
```

## Looping Constructs (for, foreach, while)

Looping constructs in PowerShell allow you to repeat a block of code multiple times based on certain conditions. The most commonly used looping constructs are `for`, `foreach`, and `while`.

### for Loop:

The `for` loop is used to iterate over a range of values. The basic syntax is:

```powershell
for ($i = startValue; $i -lt endValue; $i++) {
    # Code block to execute in each iteration
}
```

For example, to print numbers from 1 to 5:

```powershell
for ($i = 1; $i -le 5; $i++) {
    Write-Output $i
}
```

### foreach Loop:

The `foreach` loop is used to iterate over elements in an array or collection. The basic syntax is:

```powershell
foreach ($item in $collection) {
    # Code block to execute for each item in the collection
}
```

For example, to print each element in an array:

```powershell
$fruits = @("apple", "banana", "orange")

foreach ($fruit in $fruits) {
    Write-Output $fruit
}
```

### while Loop:

The `while` loop is used to repeatedly execute a code block as long as a condition is true. The basic syntax is:

```powershell
while (condition) {
    # Code block to execute while the condition is true
}
```

For example, to print numbers from 1 to 5 using a `while` loop:

```powershell
$i = 1
while ($i -le 5) {
    Write-Output $i
    $i++
}
```

## Writing and Executing PowerShell Scripts

PowerShell scripts are text files with a `.ps1` extension containing a series of PowerShell commands and scripts. To write and execute a PowerShell script, follow these steps:

1. Open a text editor (e.g., Notepad, Visual Studio Code) and write your PowerShell commands in the script file.

2. Save the file with a `.ps1` extension, such as `myscript.ps1`.

3. Open the PowerShell console or terminal.

4. Change the execution policy if needed to run scripts (use `Set-ExecutionPolicy` cmdlet).

5. Navigate to the directory where your script is saved using the `cd` command.

6. Execute the script using the `./` prefix followed by the script filename:

```powershell
./myscript.ps1
```

Note: By default, PowerShell execution policies may not allow script execution. Be sure to review and set the execution policy appropriately.

---

With an understanding of control flow and scripting in PowerShell, you can create powerful scripts that make decisions based on conditions and repeat tasks using looping constructs. Writing and executing PowerShell scripts allows you to automate complex tasks and streamline your administrative processes.
