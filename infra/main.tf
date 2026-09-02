provider "azurerm" {
  features {}
}

module "resource_group" {
  source = "./modules/resource-group"

  name     = "rg-ui-api-cicd"
  location = var.location

  tags = var.tags
}

module "app_service_plan" {
  source = "./modules/app-service-plan"

  name                = "asp-ui-api-cicd"
  resource_group_name = module.resource_group.name
  location            = module.resource_group.location
  sku_name            = "B1"

  tags = var.tags
}

module "ui_app_service" {
  source = "./modules/app-service"

  name                = "app-ui-api-cicd-ui-dev-2026"
  resource_group_name = module.resource_group.name
  location            = module.resource_group.location
  service_plan_id     = module.app_service_plan.id

  tags = merge(var.tags, {
    component = "ui"
  })
}

module "api_app_service" {
  source = "./modules/app-service"

  name                = "app-ui-api-cicd-api-dev-2026"
  resource_group_name = module.resource_group.name
  location            = module.resource_group.location
  service_plan_id     = module.app_service_plan.id

  java_version        = "21"
  java_server         = "JAVA"
  java_server_version = "21"

  tags = merge(var.tags, {
    component = "api"
  })
}   