variable "name" {
  description = "Name of the App Service Plan"
  type        = string
}

variable "resource_group_name" {
  description = "Resource Group containing the App Service Plan"
  type        = string
}

variable "location" {
  description = "Azure region for the App Service Plan"
  type        = string
}

variable "sku_name" {
  description = "App Service Plan SKU"
  type        = string
  default     = "B1"
}

variable "tags" {
  description = "Tags applied to the App Service Plan"
  type        = map(string)
  default     = {}
}