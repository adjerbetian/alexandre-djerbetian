FROM cypress/included:4.4.0

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
