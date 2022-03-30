import { render, screen } from "@testing-library/react";
import Postcard from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock

describe("<Postcard />", () => {
  it("should render Postcard correctly", () => {
    render(<Postcard {...props} />);

    expect(screen.getByRole('img', { name: /TITLE1/i }))
        .toHaveAttribute('src', 'img/img.png')
    expect(screen.getByRole('heading', { name: 'title1'})).toBeInTheDocument()
    expect(screen.getByText('body1')).toBeInTheDocument()
  });

  it('should match snapshot', () => {
     const { container } = render(<Postcard {...props} />);
     expect(container.firstChild).toMatchSnapshot()
  })
});
