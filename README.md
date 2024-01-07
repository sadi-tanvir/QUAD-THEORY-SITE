
### Live Project Link

[Live Project](https://effulgent-sawine-ad688e.netlify.app/)

## Technologies Used

- **Next.js**
- **Tailwind CSS**
- **TypeScript**
- **Formik**
- **Redux Toolkit**
- **Swiper**
- **Yup**

## Error Faced


### Mixed Content Issue
```
 page-c3ac1664f3e28480.js:1  Mixed Content: The page at 'https://659a3b973f31ad53c61d9414--famous-stroopwafel-1ad00d.netlify.app/' was loaded over HTTPS, but requested an insecure resource 'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'. This request has been blocked; the content must be served over HTTPS.
```

#### Solution Attempt
The project encountered a Mixed Content issue during deployment, preventing the direct use of the provided API. To address this, attempts were made to resolve the problem by updating the API URL to use HTTPS instead of HTTP. Despite these efforts, the issue persisted. As a workaround, a static API was implemented by creating a JSON file to ensure the smooth functioning of the application.