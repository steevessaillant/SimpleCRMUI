import React from 'react';
import { act, fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import { CustomerForm } from './components/CustomerForm';


describe("when the button is pressed", () => {


  beforeAll(() => {
    render(<CustomerForm />);
  })

  it("should display required error",  () => {
        act(() => {
      /* fire events that update state */
      fireEvent.click(screen.getByRole("button"));
    });

    waitFor(() => {
      expect(screen).toContain("Required");
    });

  });

  it("should display must be 18 error",  () => {

    act(() => {
      const ctrl = render(<CustomerForm />);
      const dateInput = getByTestId(ctrl.baseElement,'dateOfBirth');
      fireEvent.change(dateInput, { target: { value: '2222-01-01' } });
      /* fire events that update state */
      fireEvent.click(screen.getByRole("button"));
    });

     waitFor(() => {
      expect(screen).toContain("Required");
    });


  });
});