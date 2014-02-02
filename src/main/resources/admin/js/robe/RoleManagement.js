function initializeRoleManagement() {

    $("#gridRoles").kendoGrid({
        dataSource: RoleDataSource,
        sortable: true,
        toolbar: [{
            name: "create",
            text: "Yeni Rol"
        }],
        columns: [{
            field: "name",
            title: "Ad"
        }, {
            field: "code",
            title: "Kod"
        }, {
            command: [{
                name: "edit",
                text: {
                    edit: "",
                    update: "Güncelle",
                    cancel: "İptal"
                },
                className:"grid-command-iconfix"
            }, {
                name: "destroy",
                text: "",
                className:"grid-command-iconfix"
            }],
            title: "&nbsp;",
            width: "80px"
        }],
        editable: {
            mode: "popup",
            window: {
                title: "Kayıt"
            }
        }
    });

}