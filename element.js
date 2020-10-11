import {
    Table,
    TableColumn,
    Message,
    TabPane,
    Tabs,
    Button,
    Tag,
    Divider,
    InputNumber,
    Input,
    Dialog,
    Drawer,
    Tooltip,
    Form,
    FormItem,
    Select,
    Option,
    Row,
    Col,

} from 'element-ui'

export default Vue => {
    Vue.prototype.$message = Message;
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Button.name, Button);
    Vue.component(Tag.name, Tag);
    Vue.component(Divider.name, Divider);
    Vue.component(Input.name, Input);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Dialog.name, Dialog);
    Vue.component(Drawer.name, Drawer);
    Vue.component(Tooltip.name,Tooltip);
    Vue.component(FormItem.name,FormItem);
    Vue.component(Form.name,Form);
    Vue.component(Select.name,Select);
    Vue.component(Option.name,Option);
    Vue.component(Row.name,Row);
    Vue.component(Col.name,Col);

}
