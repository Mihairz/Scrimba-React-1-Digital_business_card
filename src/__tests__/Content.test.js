import { render, screen } from '@testing-library/react'
import Content from '../components/Content'

describe('Text',()=>{
    test('renders headers correctly',()=>{
        render (<Content />)

        const aboutHeader = screen.getByRole('heading', { level: 2, name: 'About' })
        expect(aboutHeader).toBeInTheDocument()

        const interestHeader = screen.getByRole('heading', { level: 2, name: 'Interests' })
        expect(interestHeader).toBeInTheDocument()
    })

    test('renders paragraphs correctly',()=>{
        render(<Content />)

        const aboutParagraph = screen.getByText('I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.');
        expect(aboutParagraph).toBeInTheDocument();
    
        const interestsParagraph = screen.getByText("Profesionally I'm most interested in mastering React. Outside work I enjoy travelling, photography and concerts.");
        expect(interestsParagraph).toBeInTheDocument();
    })
})