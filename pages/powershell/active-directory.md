# PowerShell and Active Directory

## Managing Users, Groups, and Computers

PowerShell provides powerful cmdlets for managing Active Directory objects, such as users, groups, and computers. These cmdlets allow you to perform various tasks related to user and computer administration within the Active Directory domain.

### Get-ADUser

The `Get-ADUser` cmdlet is used to retrieve information about Active Directory users. You can use this cmdlet to search for specific users or list all users in the domain.

```powershell
# Get information about a specific user
Get-ADUser -Identity "JohnDoe"

# List all users in the domain
Get-ADUser -Filter *
```

### New-ADUser

The `New-ADUser` cmdlet allows you to create new user accounts in Active Directory.

```powershell
# Create a new user account
New-ADUser -Name "JaneSmith" -SamAccountName "janesmith" -UserPrincipalName "janesmith@domain.com" -Enabled $true -AccountPassword (ConvertTo-SecureString "P@ssw0rd!" -AsPlainText -Force)
```

### Get-ADGroup

The `Get-ADGroup` cmdlet is used to retrieve information about Active Directory groups.

```powershell
# Get information about a specific group
Get-ADGroup -Identity "IT_Group"

# List all groups in the domain
Get-ADGroup -Filter *
```

### New-ADGroup

The `New-ADGroup` cmdlet allows you to create new groups in Active Directory.

```powershell
# Create a new group
New-ADGroup -Name "HR_Group" -GroupScope Global -GroupCategory Security
```

### Get-ADComputer

The `Get-ADComputer` cmdlet is used to retrieve information about Active Directory computers.

```powershell
# Get information about a specific computer
Get-ADComputer -Identity "Computer01"

# List all computers in the domain
Get-ADComputer -Filter *
```

### New-ADComputer

The `New-ADComputer` cmdlet allows you to create new computer objects in Active Directory.

```powershell
# Create a new computer object
New-ADComputer -Name "Computer02"
```

## Working with Group Policy Objects (GPOs)

PowerShell also provides cmdlets to manage Group Policy objects (GPOs) in Active Directory. GPOs allow you to configure and enforce settings on user and computer objects within the domain.

### Get-GPO

The `Get-GPO` cmdlet is used to retrieve information about Group Policy objects.

```powershell
# Get information about a specific GPO
Get-GPO -Name "DefaultDomainPolicy"

# List all GPOs in the domain
Get-GPO -All
```

### New-GPO

The `New-GPO` cmdlet allows you to create new Group Policy objects.

```powershell
# Create a new GPO
New-GPO -Name "CustomGPO"
```

### Set-GPRegistryValue

The `Set-GPRegistryValue` cmdlet is used to configure registry-based Group Policy settings within a GPO.

```powershell
# Set a registry-based Group Policy setting
Set-GPRegistryValue -Name "CustomGPO" -Key "HKCU\Software\MyApp" -ValueName "SettingName" -Type String -Value "SettingValue"
```

### Invoke-GPUpdate

The `Invoke-GPUpdate` cmdlet allows you to update Group Policy settings on a remote computer.

```powershell
# Update Group Policy settings on a remote computer
Invoke-GPUpdate -Computer "Computer01" -Force
```

## Note

Managing Active Directory and Group Policy objects using PowerShell requires appropriate permissions and Active Directory PowerShell modules. Ensure that you have the necessary rights and module availability before running these commands.

---

Using PowerShell to manage Active Directory and Group Policy objects allows you to automate administrative tasks and efficiently perform user, group, and computer management within your domain. With the right cmdlets and proper permissions, you can streamline your administrative tasks and maintain a well-managed Active Directory environment.
