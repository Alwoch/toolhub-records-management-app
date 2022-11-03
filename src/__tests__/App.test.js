import { render,screen} from '@testing-library/react';
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom";
import App from '../App';

//Tests cases
  //App component should render correctly
  //rendered App matches the snapshot

test("should render App component successfully",()=>{
 render(<BrowserRouter><App/></BrowserRouter>);
 const AppElement=screen.getByTestId('app');
 expect(AppElement).toBeInTheDocument();
})

test("App should match snapshot",()=>{
 const AppTree=renderer.create(<BrowserRouter><App/></BrowserRouter>).toJSON()
 expect(AppTree).toMatchSnapshot()
})