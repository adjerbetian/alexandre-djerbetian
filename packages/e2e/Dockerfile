FROM cypress/included:10.6.0

COPY --from=builder /app /app

WORKDIR /app/packages/e2e
RUN npx cypress verify
