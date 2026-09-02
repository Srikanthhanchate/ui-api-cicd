variable "location" {
  description = "Azure deployment region"
  type        = string
  default     = "Central India"
}

variable "tags" {
  description = "Common resource tags"
  type        = map(string)

  default = {
    project     = "ui-api-cicd"
    environment = "dev"
    managed_by  = "terraform"
  }
}