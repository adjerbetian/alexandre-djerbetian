FROM cypress/included:4.5.0

COPY --from=builder /app/packages/e2e /app/packages/e2e
COPY --from=builder /app/packages/entities /app/packages/entities

WORKDIR /app/packages/e2e
RUN npx cypress verify
