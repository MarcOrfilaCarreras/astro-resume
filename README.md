<div align="center">
    <h1>Astro Resume</h1>
    <h4>Astro Resume: JSON-Crafted, LinkedIn-Connected</h4>
</div>

<p align="center">
    <a href="https://github.com/MarcOrfilaCarreras/astro-resume/issues">Report Bug</a>
    ·
    <a href="https://github.com/MarcOrfilaCarreras/astro-resume/issues">Request Feature</a>
  </p>

<br>

## :arrow_right: Getting Started

> :eyes: Ensure you have Node.js installed on your system.

Clone the repository to your local machine using this command:

``` bash
git clone https://github.com/MarcOrfilaCarreras/astro-resume.git
```

Navigate to the project directory:
```bash
cd astro-resume
```

Install dependencies:
```bash
npm install
```

### Configuration

#### :computer: Environment
Copy the .env.example file:
``` bash
cp .env.example .env
```

> :eyes: Ensure you have an API Key from [Fresh Data](https://rapidapi.com/freshdata-freshdata-default/api/fresh-linkedin-profile-data).

Edit the .env file and replace the placeholder values with your actual configuration settings:
``` bash
export API_KEY= <YOUR-API-KEY>
export API_PROFILE_URL= <YOUR-API-PROFILE-URL>
```

Source the .env file:
``` bash
source .env
```

After sourcing the .env file, the environment variables defined in it should be available for the application to use.

#### :page_facing_up: data.json
You can customize your resume by editing the config.json in ./src:
``` bash
nano src/config.json
```

## :question: Troubleshooting

#### Could not import ../data.json

If you encounter the error message "Could not import ../data.json," it indicates that the application is unable to find the required data.json file in the specified location. Use the cURL command to fetch data from the API endpoint.
``` bash
curl --request GET \
    --url "https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=${API_PROFILE_URL}&include_skills=false" \
    --header "X-RapidAPI-Host: fresh-linkedin-profile-data.p.rapidapi.com" \
    --header "X-RapidAPI-Key: ${API_KEY}" >> src/data.json

```