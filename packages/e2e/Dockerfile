FROM cypress/included:4.12.1

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
