import {
    NavBar,
    Notify,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    Cell,
    Col,
    Row,
    Sticky,
    Tag,
    Popup,
    Divider,
    List,
    CellGroup,
    Field,
    Picker,
    Button,
    Collapse,
    CollapseItem
} from "vant";
export default Vue => {
    Vue.prototype.$notify = Notify;
    Vue.component(NavBar.name, NavBar);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Grid.name, Grid);
    Vue.component(GridItem.name, GridItem);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabbarItem.name, TabbarItem);
    Vue.component(Cell.name,Cell);
    Vue.component(Col.name,Col);
    Vue.component(Row.name,Row);
    Vue.component(Sticky.name,Sticky);
    Vue.component(Tag.name,Tag);
    Vue.component(Popup.name,Popup);
    Vue.component(Divider.name,Divider);
    Vue.component(List.name,List);
    Vue.component(CellGroup.name,CellGroup);
    Vue.component(Field.name,Field);
    Vue.component(Picker.name,Picker);
    Vue.component(Button.name,Button);
    Vue.component(CollapseItem.name,CollapseItem);
    Vue.component(Collapse.name,Collapse);

}
