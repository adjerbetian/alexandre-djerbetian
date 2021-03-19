FROM cypress/included:6.8.0

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
