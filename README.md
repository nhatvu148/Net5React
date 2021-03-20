# Commands:
- dotnet --info
- dotnet -h
- dotnet new -l
- dotnet new sln
- dotnet new webapi -n API
- dotnet new classlib -n Application
- dotnet new classlib -n Domain
- dotnet new classlib -n Persistence
- dotnet sln add API
- dotnet sln add Application
- dotnet sln add Domain
- dotnet sln add Persistence
- dotnet sln list
- cd API && dotnet add reference ../Application/
- cd Application && dotnet add reference ../Persistence/ && dotnet add reference ../Domain/
- cd Persistence && dotnet add reference ../Domain/

- cd API && dotnet run
- dotnet watch run

- dotnet tool list --global
- dotnet tool install --global dotnet-ef --version 5.0.4
- dotnet tool update --global dotnet-ef --version 5.0.4
- dotnet ef -h
- dotnet ef migrations add IntialCreate -p Persistence/ -s API/

- dotnet ef database -h

# VSCode:
- Cmd + Shift + P --> .NET: Generate Assets for Build and Debug
- Cmd + , --> Exclude **/bin and **/obj
- Cmd + P --> Look for files