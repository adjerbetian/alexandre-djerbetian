FROM cypress/included:4.6.0

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
