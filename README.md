## BAR CHALLENGE FRONTEND


You can try the deployed version: 

`https://bar-challenge-frontend.vercel.app/`

First, install dependencies:

```bash
npm install
```


You will need an environment variable called `NEXT_PUBLIC_API_URL`

Create an `.env.local` file.

Add the env variable there... If you want to target the deployed backend, just point to the test API: 

```bash
NEXT_PUBLIC_API_URL=https://bar-challenge-python.onrender.com
```

After that, run the development server:
```bash
npm run dev
```

To interact with the platform, first start adding beers, then go to orders and proceed to checkout!


