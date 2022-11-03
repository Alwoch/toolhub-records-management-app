import { render,screen} from '@testing-library/react';
import renderer from "react-test-renderer"
import { BrowserRouter } from "react-router-dom";
import Leaderboard from '../Leaderboard';

//Tests cases
  //Leaderboard should render correctly
  //Leaderboard should match the snapshot

test("should render Navbar component successfully",()=>{
 render(<BrowserRouter><Leaderboard/></BrowserRouter>);
 const leaderboardComponent=screen.getByTestId('leaderboard');
 expect(leaderboardComponent).toBeInTheDocument();
})

test("Navbar should match snapshot",()=>{
 const leaderboardTree=renderer.create(<BrowserRouter><Leaderboard/></BrowserRouter>).toJSON()
 expect(leaderboardTree).toMatchSnapshot()
})