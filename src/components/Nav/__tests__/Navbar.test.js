import { render,screen} from '@testing-library/react';
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom";
import Navbar from '../Navbar';

//Tests cases
  //Navbar should render correctly
  //Navbar should match the snapshot

test("should render Navbar component successfully",()=>{
 render(<BrowserRouter><Navbar/></BrowserRouter>);
 const NavComponent=screen.getByTestId('nav');
 expect(NavComponent).toBeInTheDocument();
})

test("Navbar should match snapshot",()=>{
 const navTree=renderer.create(<BrowserRouter><Navbar/></BrowserRouter>).toJSON()
 expect(navTree).toMatchSnapshot()
})