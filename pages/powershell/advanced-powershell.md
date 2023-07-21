# Advanced PowerShell Techniques

## Regular Expressions in PowerShell

Regular expressions (regex) are powerful patterns used for matching and manipulating text. In PowerShell, you can use regular expressions with various cmdlets, such as `Select-String`, `Get-Content`, and `Replace`, to perform advanced text matching and manipulation tasks.

### Using Select-String

The `Select-String` cmdlet allows you to search for text using regular expressions. It returns the lines that match the specified pattern.

```powershell
# Search for lines containing "Error" in a file
Get-Content C:\Logs\log.txt | Select-String "Error"

# Search for lines containing a specific pattern (e.g., date format)
Get-Content C:\Logs\log.txt | Select-String "\d{2}-\d{2}-\d{4}"
```

### Using Replace

The `Replace` method allows you to replace text using regular expressions.

```powershell
# Replace all occurrences of "oldtext" with "newtext" in a string
"Hello oldtext, welcome!" -replace "oldtext", "newtext"

# Replace all digits with "X" in a string
"123-456-7890" -replace "\d", "X"
```

## Working with XML and JSON Data

PowerShell provides built-in support for working with XML and JSON data, making it easy to parse, manipulate, and generate structured data.

### XML

You can use the `Get-Content` cmdlet to read XML files and the `Select-Xml` cmdlet to query XML data.

```powershell
# Read XML data from a file
$xml = Get-Content C:\Data\data.xml

# Query XML data using XPath
$xml | Select-Xml "//book[price>20]"
```

### JSON

You can use the `Get-Content` cmdlet to read JSON files and the `ConvertFrom-Json` cmdlet to convert JSON data to PowerShell objects.

```powershell
# Read JSON data from a file and convert to PowerShell object
$json = Get-Content C:\Data\data.json | ConvertFrom-Json

# Access JSON properties using dot notation
$json.books | Where-Object { $_.price -gt 20 }
```

## WMI/CIM in PowerShell

Windows Management Instrumentation (WMI) and Common Information Model (CIM) are technologies that provide information about the hardware, software, and configuration of Windows systems. PowerShell allows you to access WMI and CIM data through the `Get-WmiObject` (legacy) or `Get-CimInstance` cmdlets.

```powershell
# Get information about installed software using WMI
Get-WmiObject -Class Win32_Product

# Get information about processes using CIM
Get-CimInstance -ClassName Win32_Process
```

WMI is being replaced by CIM, so it's recommended to use `Get-CimInstance` whenever possible.

### Querying WMI/CIM Data

You can use the `Where-Object` cmdlet to filter and query WMI/CIM data.

```powershell
# Get processes with CPU usage greater than 50%
Get-CimInstance -ClassName Win32_Process | Where-Object { $_.PercentProcessorTime -gt 50 }
```

WMI/CIM provides valuable system information, making it useful for system administration, monitoring, and troubleshooting tasks.

---

Mastering regular expressions, working with XML and JSON data, and utilizing WMI/CIM allows you to handle complex data and perform advanced system-related tasks in PowerShell. These advanced techniques empower you to manipulate, query, and manage data effectively, expanding your PowerShell capabilities significantly.
