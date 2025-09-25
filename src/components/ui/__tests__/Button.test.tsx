import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders correctly with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-600', 'text-white')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gray-600', 'text-white')
  })

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border', 'border-gray-300', 'text-gray-700')
  })

  it('applies ghost variant styles', () => {
    render(<Button variant="ghost">Ghost Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-gray-700')
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
  })

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading Button</Button>)
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toHaveClass('animate-spin')
  })

  it('is disabled when loading', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', () => {
    const handleClick = jest.fn()
    render(<Button loading onClick={handleClick}>Loading Button</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
