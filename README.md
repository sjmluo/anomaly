<p align="center">
    <img src="src/images/logo.svg" alt="icon" width="125px" />
</p>
<h1 align="center">
    Website for Contextually Situated Anomaly Detection
</h1>

<p align="center">
  Check out the main repo <a href="https://github.com/sjmluo/Contextually_Situated_Anomaly_Detection" target="_blank">here</a>
</p>

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn install
   ```
   
4. Replace `.env.development.template` with `.env.development` and fill in the `CONTENTFUL_ACCESS_TOKEN`

5. Start the development server

   ```sh
   yarn develop
   ```
   

## 🚀 Deploying for Production

1. Replace `.env.production.template` with `.env.production` and fill in the `CONTENTFUL_ACCESS_TOKEN`

2. Preview the site before deployment

   ```shell
   yarn build
   
   yarn serve
   ```

3. Deploy to Github Pages
   ```shell
   yarn deploy
   ```

## 📁 Folder structure

    ├── plugins                 # Custom local plugins
    │   ├── mui-emotion         # Emotion based styling for CSS-in-JS for Gatsby
    │   ├── top-layout          # React helmet based SEO
    ├── src                     # Source files
    │   ├── components          # Shared common components
    │   ├── images              # All images that are used for the website
    │   ├── layouts             # Handle different types of page layouts
    │   ├── pages               # React components to programmatically control Gatsby pages
    │   ├── theme               # Color themes and palettes
    │   └── views               # Individual components for the Gatsby pages
    ├── .eslint.js              # Config for ESlint
    ├── .prettierrc             # Config for Prettier
    ├── gatsby-config.js        # Config for Gatsby plugins
    ├── package.json            # Dependencies and scripts
    └── README.md