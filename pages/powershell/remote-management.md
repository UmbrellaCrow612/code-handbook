# Remote Management with PowerShell

## Remoting Basics

PowerShell remoting allows you to run PowerShell commands and scripts on remote computers. It enables you to manage and administer multiple machines from a single location, making it a powerful tool for remote administration.

### Enable-PSRemoting

Before you can use PowerShell remoting, you need to enable it on both the local and remote computers. On the local computer, open an elevated PowerShell session and run the following command:

```powershell
Enable-PSRemoting -Force
```

This command enables PowerShell remoting on the local computer by configuring necessary services and firewall rules. The `-Force` parameter allows the command to automatically restart the necessary services if needed.

### Enter-PSSession

Once remoting is enabled, you can start a remote PowerShell session using the `Enter-PSSession` cmdlet. This allows you to interact with the remote computer's PowerShell session as if you were physically on that machine.

To enter a remote session, use the following command:

```powershell
Enter-PSSession -ComputerName <RemoteComputerName>
```

Replace `<RemoteComputerName>` with the name or IP address of the remote computer you want to connect to.

## Using PowerShell to Manage Remote Computers

Once you are in a remote PowerShell session, you can execute commands as if you were running them directly on the remote computer. Any cmdlet you run will execute on the remote machine, and the output will be returned to your local session.

Here are some examples of managing remote computers using PowerShell remoting:

### Get Information about Remote Processes

```powershell
# Connect to the remote computer
Enter-PSSession -ComputerName RemoteServer01

# Get information about running processes on the remote computer
Get-Process

# Exit the remote session and return to the local computer
Exit-PSSession
```

### Restart Remote Computer

```powershell
# Restart the remote computer
Restart-Computer -ComputerName RemoteServer01 -Force
```

### Install Software on Remote Computer

```powershell
# Install software on the remote computer (example: Notepad++)
Invoke-Command -ComputerName RemoteServer01 -ScriptBlock {
    Start-Process "https://download.notepad-plus-plus.org/repository/8.x/8.1/npp.8.1.Installer.x64.exe" -Wait
}
```

### Query Remote Registry

```powershell
# Get a value from the remote computer's registry
Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion" -Name "ProgramFilesDir" -ComputerName RemoteServer01
```

**Note**: To use PowerShell remoting, you need appropriate permissions on the remote computer. You may need to provide administrative credentials to access some resources.

---

PowerShell remoting simplifies remote management and administration tasks by allowing you to execute PowerShell commands and scripts on remote computers. By enabling PSRemoting and using the Enter-PSSession cmdlet, you can manage multiple machines from a single console, making it a valuable tool for IT administrators and system operators.
