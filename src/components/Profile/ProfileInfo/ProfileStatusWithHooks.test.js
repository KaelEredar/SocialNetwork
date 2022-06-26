import {render, screen} from "@testing-library/react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import renderer from 'react-test-renderer';

describe("ProfileStatusWithHooks component", () => {
    test("after creation span should be displayed", async () => {
        const component = renderer.create(<ProfileStatusWithHooks/>)
        const root = component.root;
        const span = await root.findByType('span');
        expect(span).not.toBeNull();
    })
    test("after creation span should contains correct status",  () => {
        render(<ProfileStatusWithHooks status="test status"/>)
        screen.getByText("test status")
    })
})