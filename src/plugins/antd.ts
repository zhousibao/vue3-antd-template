import type { App } from 'vue';
import 'ant-design-vue/dist/antd.css';
import { 
    Form, Button, Input, Checkbox, Radio, Select, Switch, TimePicker, Upload, // 表单类
    Row, Col, Space, // 布局类
    Menu, Dropdown, Pagination, // 导航类
    Table, Card, Collapse, Image, List, Tabs, // 模块
    Modal, Alert, Progress, Spin, // 反馈
    Tag,
    BackTop, Divider, Badge, // 其他

} from 'ant-design-vue';


export function setupAntd(app: App<Element>) {
    app.use(Form).use(Button).use(Input).use(Checkbox).use(Radio).use(Select).use(Switch).use(TimePicker).use(Upload)
        .use(Row).use(Col).use(Space)
        .use(Menu).use(Dropdown).use(Pagination)
        .use(Table).use(Card).use(Collapse).use(Image).use(List).use(Tabs)
        .use(Modal).use(Alert).use(Progress).use(Spin)
        .use(BackTop).use(Divider)
        .use(Tag)
        .use(BackTop).use(Divider).use(Badge)
}
