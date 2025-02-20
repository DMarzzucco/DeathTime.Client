FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["D_T_Source/D_T_Source.csproj", "D_T_Source/"]
RUN dotnet restore "./D_T_Source/D_T_Source.csproj"
COPY . .
WORKDIR "/src/D_T_Source"
RUN dotnet tool install --global dotnet-ef 
RUN dotnet build "./D_T_Source.csproj" -c $BUILD_CONFIGURATION -o /app/build
CMD dotnet ef database update --environment Production --project src/D_T_Source

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./D_T_Source.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "D_T_Source.dll"]