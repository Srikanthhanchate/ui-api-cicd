output "id" {
  description = "Web App resource ID"
  value       = azurerm_linux_web_app.this.id
}

output "name" {
  description = "Web App name"
  value       = azurerm_linux_web_app.this.name
}

output "default_hostname" {
  description = "Web App default hostname"
  value       = azurerm_linux_web_app.this.default_hostname
}