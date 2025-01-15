# Example-CICD-Workflow

Showcase Workflow Tools via GH Actions

## What's Included

- **Automated Testing**: Examples of automated testing workflows using Jest and other testing frameworks.
- **Build and Deployment**: Workflows that automate the build and deployment process to GitHub Pages or other hosting services.
- **Responsive React Application**: A simple React calculator application that demonstrates responsive design and CI/CD best practices.
- **Slide Deck**: A comprehensive slide deck for presenters to understand and showcase the workflows and tools used in this repository.

## Setup and Usage

### Prerequisites

- GitHub account
- Basic understanding of YAML and GitHub Actions

### Understanding YAML code

YAML Code is seperated into 5 parts

- Events
- Jobs
- Runners
- Steps
- Actions

* Linter: a tool composed of multiple linters that automatically checks code to ensure it conforms to specific standards and coding styles. It supports multiple programming languages and helps maintain consistent code quality across a repository.

Here is an example Super Linter YAML file:

```yml
name: Super-Linter

on: push # specifies when the workflow is triggered (when pushing code)

jobs:
  super-lint: # one job that has multiple steps
    name: Lint code Base
    runs-on: ubuntu-latest # container environment (hosted on GH.com)
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run Super-Linter
        uses: github/super-linter@v4
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

WORKFLOW FILES MUST BE IN Repository DIRECTIORY `~/.github/workflows/superlinter.YML`

### Steps to Get Started

<!-- We gonna try to make it so you don't need to clone anything and u can just start presenting -->

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/Example-CICD-Workflow.git
   ```

2. **TBC**

   ```bash
   To Be Continued
   ```
