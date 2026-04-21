export async function GET() {
  const now = new Date().toISOString().slice(11, 19)

  const tape = [
    {
      time: now,
      type: "ALERT",
      message: "Nigeria bond spreads widening beyond 9%"
    },
    {
      time: now,
      type: "WARNING",
      message: "Ghana FX volatility increasing intraday"
    },
    {
      time: now,
      type: "INFO",
      message: "Africa Risk Index holding at elevated levels"
    },
    {
      time: now,
      type: "ALERT",
      message: "Egypt sovereign credit stress accelerating"
    }
  ]

  return Response.json(tape)
}