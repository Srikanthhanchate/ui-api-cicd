output "resource_group_name" {
  description = "Name of the Azure Resource Group"
  value       = module.resource_group.name
}

output "resource_group_id" {
  description = "ID of the Azure Resource Group"
  value       = module.resource_group.id
}

output "app_service_plan_name" {
  description = "Name of the App Service Plan"
  value       = module.app_service_plan.name
}

output "ui_app_service_name" {
  description = "Name of the UI App Service"
  value       = module.ui_app_service.name
}

output "ui_app_service_url" {
  description = "URL of the UI App Service"
  value       = "https://${module.ui_app_service.default_hostname}"
}

output "api_app_service_name" {
  description = "Name of the API App Service"
  value       = module.api_app_service.name
}

output "api_app_service_url" {
  description = "URL of the API App Service"
  value       = "https://${module.api_app_service.default_hostname}"
}