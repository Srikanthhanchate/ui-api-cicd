resource "azurerm_linux_web_app" "this" {
  name                = var.name
  resource_group_name = var.resource_group_name
  location            = var.location
  service_plan_id     = var.service_plan_id

  https_only = true

  site_config {
    always_on = true

    dynamic "application_stack" {
      for_each = var.java_version != null ? [1] : []

      content {
        java_version        = var.java_version
        java_server         = var.java_server
        java_server_version = var.java_server_version
      }
    }
  }

  tags = var.tags
}