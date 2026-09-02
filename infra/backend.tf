terraform {
  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "stuapicicdtfstate2026"
    container_name       = "tfstate"
    key                  = "ui-api-cicd.tfstate"
  }
}