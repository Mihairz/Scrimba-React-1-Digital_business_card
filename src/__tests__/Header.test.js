import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Media', () => {

    test('renders profile picture correctly', () => {
        render(<Header />)
        const imgElement = screen.getByRole('img')
        expect(imgElement).toBeInTheDocument()
    })

})

describe('Text content', () => {

    test('renders name correctly', () => {
        render(<Header />)
        const personName = screen.getByRole('heading', { level: 1 })
        expect(personName).toBeInTheDocument()
        expect(personName).toHaveTextContent('Ibrian Mihai-Răzvan')
    })

    test('renders job title correctly', () => {
        render(<Header />)
        const jobTitle = screen.getByRole('heading', { level: 2, name: 'Frontend Developer' })
        expect(jobTitle).toBeInTheDocument()
    })

    test('renders email button correctly', () => {
        render(<Header />);
        const emailButton = screen.getByRole('button', { name: 'E-mail' })
        expect(emailButton).toBeInTheDocument();
    });

})

