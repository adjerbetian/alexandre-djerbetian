FROM cypress/included:7.5.0

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
