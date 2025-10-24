# BrandingBeez.io website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/info-brandingbeezs-projects/v0-branding-beez-io-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/zMhA9Xy34je)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/info-brandingbeezs-projects/v0-branding-beez-io-website](https://vercel.com/info-brandingbeezs-projects/v0-branding-beez-io-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/zMhA9Xy34je](https://v0.app/chat/projects/zMhA9Xy34je)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Database Configuration

Consultation and footer lead submissions are now stored in an external PostgreSQL
database. Set the following environment variables before running the application:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Connection string for your PostgreSQL instance. |
| `PG_POOL_MAX` | *(Optional)* Maximum number of pooled connections (defaults to `5`). |
| `PG_IDLE_TIMEOUT` | *(Optional)* Idle timeout in milliseconds for pool connections (defaults to `30000`). |
| `PGSSL` | *(Optional)* Set to `disable` to skip SSL configuration. By default SSL is enabled in production with relaxed certificate validation. |

Tables are created automatically on first use if they do not already exist.
