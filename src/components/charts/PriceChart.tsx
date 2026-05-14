import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
import GlassCard from '../ui/GlassCard'

interface PriceChartProps {
  data: number[]
  labels: string[]
}

const PriceChart = ({ data, labels }: PriceChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')

      if (ctx) {
        // Unregister all plugins to avoid duplicates
        Chart.unregister(...Chart.registry.filter((plugin) => plugin.id !== 'legend'))

        // Register all components
        Chart.register(...registerables)

        // Destroy previous chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Price',
              data: data,
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4,
              fill: true,
              pointRadius: 0,
              pointHoverRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                titleColor: '#f8fafc',
                bodyColor: '#f8fafc',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                padding: 12,
                callbacks: {
                  label: (context) => {
                    return `Price: $${context.parsed.y.toFixed(2)}`
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#cbd5e1'
                }
              },
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.05)'
                },
                ticks: {
                  color: '#cbd5e1',
                  callback: (value) => {
                    return `$${value}`
                  }
                }
              }
            }
          }
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, labels])

  return (
    <GlassCard className="h-full">
      <div className="h-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </GlassCard>
  )
}

export default PriceChart