variable "name" {
  description = "Globally unique Azure Web App name"
  type        = string
}

variable "resource_group_name" {
  description = "Resource Group containing the Web App"
  type        = string
}

variable "location" {
  description = "Azure region for the Web App"
  type        = string
}

variable "service_plan_id" {
  description = "App Service Plan resource ID"
  type        = string
}

variable "tags" {
  description = "Tags applied to the Web App"
  type        = map(string)
  default     = {}
}