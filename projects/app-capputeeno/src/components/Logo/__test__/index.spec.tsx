import { render, screen } from "@testing-library/react"
import { Logo } from ".."


describe('<Logo />', () => {
    it('Should render correctly', () => {
        render(<Logo />)
        expect(screen.getByText(/Capputeenos/i)).toBeInTheDocument
    })
})
