import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { ScrollButton } from '.';

describe('<ScrollButton />', () => {
    it("should render the button correctly", () => {
        render(<ScrollButton />);        
        const button = screen.getByTestId('scrollButton');

        expect(button).toBeInTheDocument();
    })
    
    it('should get the user to the top of the browser when clicked', async () => {
      render(<ScrollButton />);
      const scrollButton = screen.getByTestId('scrollButton');
      
      window.scrollTo(0, 500);
      fireEvent.click(scrollButton);
      
      await waitFor(() => {
        expect(window.scrollY).toBe(0);
      });
    });
});
