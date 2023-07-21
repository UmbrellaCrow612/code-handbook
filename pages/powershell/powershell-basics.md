# PowerShell Basics

## Understanding Cmdlets (Verbs and Nouns)

In PowerShell, cmdlets are the fundamental building blocks of commands. A cmdlet is a lightweight command that performs a specific action or operation. Cmdlets follow a naming convention consisting of two parts: a verb and a noun, separated by a hyphen.

1. **Verb**: The verb part of the cmdlet name indicates the action the cmdlet performs. Verbs in PowerShell are action-oriented and help describe what the cmdlet does. Common verbs include Get, Set, New, Start, Stop, Remove, and many others.

2. **Noun**: The noun part of the cmdlet name specifies the target or resource on which the cmdlet operates. Nouns are usually objects or resources in the Windows environment, such as processes, files, services, users, etc.

For example:

- `Get-Process`: Retrieves information about running processes.
- `Set-Service`: Changes the properties of a Windows service.
- `New-Item`: Creates a new item, like a file or a folder.

## Using the Get-Help Cmdlet

The `Get-Help` cmdlet is a vital tool for learning and understanding PowerShell cmdlets and their usage. It provides access to the built-in help documentation and allows users to explore cmdlets, their parameters, and examples of usage.

To use `Get-Help`, open the PowerShell console or terminal and type:

```powershell
Get-Help <cmdlet-name>
```

Replace `<cmdlet-name>` with the name of the cmdlet you want to learn about. Press Enter, and PowerShell will display detailed information about the cmdlet, including its synopsis, description, parameter list, examples, and related links.

For example:

```powershell
Get-Help Get-Process
```

This command will display help information about the `Get-Process` cmdlet, explaining how to use it to retrieve information about running processes.

## Basic Command Syntax and Pipeline Concept

The basic syntax for a PowerShell cmdlet is as follows:

```powershell
<Verb>-<Noun> [-Parameter1 <Value1>] [-Parameter2 <Value2>] ...
```

- `<Verb>-<Noun>`: Represents the name of the cmdlet, following the verb-noun convention as explained earlier.

- `[-Parameter1 <Value1>]`: Optional parameters that modify the behavior of the cmdlet. Parameters are specified with a hyphen followed by the parameter name and then the value to be passed to that parameter.

- `...`: Denotes that there can be more parameters as needed.

One of the most powerful features of PowerShell is the concept of the pipeline. The pipeline allows you to pass the output of one cmdlet as input to another, creating a seamless flow of data between cmdlets.

For example:

```powershell
Get-Process | Where-Object { $_.WorkingSet -gt 100MB } | Sort-Object WorkingSet -Descending
```

In this example, we are using the pipeline to perform the following actions:

1. `Get-Process`: Retrieves information about running processes.
2. `Where-Object { $_.WorkingSet -gt 100MB }`: Filters the processes, selecting only those with a working set greater than 100MB.
3. `Sort-Object WorkingSet -Descending`: Sorts the remaining processes by their working set size in descending order.

## Working with Objects and Properties

PowerShell is designed around the concept of object-oriented automation, which means that the output of most cmdlets is in the form of objects with properties and methods.

When you run a cmdlet, it produces output in a tabular format with columns representing the properties of the objects. You can access these properties using dot notation or by using cmdlets like `Select-Object`.

For example, when you run `Get-Process`, you get a list of process objects, each having properties like `Name`, `Id`, `CPU`, `WorkingSet`, etc.

To select specific properties, you can use the `Select-Object` cmdlet:

```powershell
Get-Process | Select-Object Name, Id, CPU
```

This command will display the process names, IDs, and CPU usage of all running processes.

By understanding and utilizing object-oriented concepts, you can efficiently manipulate and work with data in PowerShell, making it a powerful tool for automation and system management.

---

Mastering these PowerShell basics will provide a solid foundation for exploring more advanced features and functionalities. Practice using cmdlets, the pipeline, and working with objects to become proficient in PowerShell scripting and automation.
