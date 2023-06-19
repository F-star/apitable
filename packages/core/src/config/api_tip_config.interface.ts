export interface APITipConfigInterface {
    api: API;
}

export interface API {
    tips: Tips;
}

export interface Tips {
    api_add_row_failed_wrong_length_of_value:             PuneHedgehog;
    api_attachment_file_size_error:                       PuneHedgehog;
    api_dashboard_not_exist:                              PuneHedgehog;
    api_datasheet_not_exist:                              PuneHedgehog;
    api_datasheet_not_visible:                            PuneHedgehog;
    api_delete_error:                                     PuneHedgehog;
    api_delete_error_foreign_datasheet_deleted:           PuneHedgehog;
    api_embed_link_id_not_exist:                          PuneHedgehog;
    api_embed_link_instance_limit:                        PuneHedgehog;
    api_embed_link_limit:                                 PuneHedgehog;
    api_enterprise_limit:                                 PuneHedgehog;
    api_favicon_value_error:                              PuneHedgehog;
    api_fieldid_empty_error:                              PuneHedgehog;
    api_forbidden:                                        PuneHedgehog;
    api_forbidden_because_of_not_in_space:                PuneHedgehog;
    api_forbidden_because_of_usage:                       PuneHedgehog;
    api_frequently_error:                                 PuneHedgehog;
    api_insert_error:                                     PuneHedgehog;
    api_node_node_type_value_error:                       PuneHedgehog;
    api_node_permission_error:                            PuneHedgehog;
    api_node_permission_value_error:                      PuneHedgehog;
    api_not_exists:                                       PuneHedgehog;
    api_param_add_widget_btn_type_error:                  PuneHedgehog;
    api_param_api_btn_type_error:                         PuneHedgehog;
    api_param_attachment_array_type_error:                PuneHedgehog;
    api_param_attachment_name_type_error:                 PuneHedgehog;
    api_param_attachment_not_exists:                      PuneHedgehog;
    api_param_attachment_token_type_error:                PuneHedgehog;
    api_param_basic_tools_type_error:                     PuneHedgehog;
    api_param_checkbox_field_type_error:                  PuneHedgehog;
    api_param_collaborator_status_bar_type_error:         PuneHedgehog;
    api_param_collapsed_type_error:                       PuneHedgehog;
    api_param_currency_field_type_error:                  PuneHedgehog;
    api_param_datetime_field_type_error:                  PuneHedgehog;
    api_param_default_error:                              PuneHedgehog;
    api_param_email_field_type_error:                     PuneHedgehog;
    api_param_embed_link_id_not_empty:                    PuneHedgehog;
    api_param_embed_permission_type_error:                PuneHedgehog;
    api_param_form_btn_type_error:                        PuneHedgehog;
    api_param_form_setting_btn_type_error:                PuneHedgehog;
    api_param_formula_error:                              PuneHedgehog;
    api_param_formula_function_content_empty:             PuneHedgehog;
    api_param_formula_function_err_end_of_right_bracket:  PuneHedgehog;
    api_param_formula_function_err_no_left_bracket:       PuneHedgehog;
    api_param_formula_function_err_no_ref_self_column:    PuneHedgehog;
    api_param_formula_function_err_not_definition:        PuneHedgehog;
    api_param_formula_function_err_unable_parse_char:     PuneHedgehog;
    api_param_formula_function_err_unknown_operator:      PuneHedgehog;
    api_param_formula_function_err_wrong_function_suffix: PuneHedgehog;
    api_param_full_screen_btn_type_error:                 PuneHedgehog;
    api_param_history_btn_type_error:                     PuneHedgehog;
    api_param_invalid_rating_field:                       PuneHedgehog;
    api_param_invalid_record_id_value:                    PuneHedgehog;
    api_param_invalid_space_id_value:                     PuneHedgehog;
    api_param_link_field_type_error:                      PuneHedgehog;
    api_param_member_field_type_error:                    PuneHedgehog;
    api_param_member_id_type_error:                       PuneHedgehog;
    api_param_multiselect_field_type_error:               PuneHedgehog;
    api_param_multiselect_field_value_type_error:         PuneHedgehog;
    api_param_node_id_not_empty_key:                      PuneHedgehog;
    api_param_node_info_bar_type_error:                   PuneHedgehog;
    api_param_number_field_type_error:                    PuneHedgehog;
    api_param_payload_banner_logo_type_error:             PuneHedgehog;
    api_param_payload_editable_type_error:                PuneHedgehog;
    api_param_percent_field_type_error:                   PuneHedgehog;
    api_param_phone_field_type_error:                     PuneHedgehog;
    api_param_rating_field_type_error:                    PuneHedgehog;
    api_param_record_not_exists:                          PuneHedgehog;
    api_param_robot_btn_type_error:                       PuneHedgehog;
    api_param_select_field_value_type_error:              PuneHedgehog;
    api_param_share_btn_type_error:                       PuneHedgehog;
    api_param_singletext_field_type_error:                PuneHedgehog;
    api_param_sort_missing_field:                         PuneHedgehog;
    api_param_sort_field_not_exists:                      PuneHedgehog;
    api_param_filter_field_not_exists:                    PuneHedgehog;
    api_param_tabbar_type_error:                          PuneHedgehog;
    api_param_text_field_type_error:                      PuneHedgehog;
    api_param_theme_type_error:                           PuneHedgehog;
    api_param_toolbar_type_error:                         PuneHedgehog;
    api_param_type_error:                                 PuneHedgehog;
    api_param_unit_name_type_not_exists:                  PuneHedgehog;
    api_param_unit_not_exists:                            PuneHedgehog;
    api_param_url_field_type_error:                       PuneHedgehog;
    api_param_view_not_exists:                            PuneHedgehog;
    api_param_viewid_empty_error:                         PuneHedgehog;
    api_param_viewid_type_error:                          PuneHedgehog;
    api_param_viewids_empty_error:                        PuneHedgehog;
    api_param_widget_btn_type_error:                      PuneHedgehog;
    api_params_automumber_can_not_operate:                PuneHedgehog;
    api_params_can_not_operate:                           PuneHedgehog;
    api_params_cellformat_error:                          PuneHedgehog;
    api_params_created_time_can_not_operate:              PuneHedgehog;
    api_params_createdby_can_not_operate:                 PuneHedgehog;
    api_params_empty_error:                               PuneHedgehog;
    api_params_formula_can_not_operate:                   PuneHedgehog;
    api_params_instance_attachment_name_error:            PuneHedgehog;
    api_params_instance_attachment_token_error:           PuneHedgehog;
    api_params_instance_error:                            PuneHedgehog;
    api_params_instance_fields_error:                     PuneHedgehog;
    api_params_instance_member_name_error:                PuneHedgehog;
    api_params_instance_member_type_error:                PuneHedgehog;
    api_params_instance_recordid_error:                   PuneHedgehog;
    api_params_instance_sort_error:                       PuneHedgehog;
    api_params_instance_space_id_error:                   PuneHedgehog;
    api_params_invalid_field_key:                         PuneHedgehog;
    api_params_invalid_field_type:                        PuneHedgehog;
    api_params_invalid_fields_value:                      PuneHedgehog;
    api_params_invalid_order_sort:                        PuneHedgehog;
    api_params_invalid_primary_field_type_error:          PuneHedgehog;
    api_params_invalid_value:                             PuneHedgehog;
    api_params_link_field_record_ids_must_unique:         PuneHedgehog;
    api_params_link_field_recordids_empty_error:          PuneHedgehog;
    api_params_link_field_recordids_not_exists:           PuneHedgehog;
    api_params_link_field_records_max_count_error:        PuneHedgehog;
    api_params_lookup_related_link_field_not_exists:      PuneHedgehog;
    api_params_lookup_related_field_not_link:             PuneHedgehog;
    api_params_lookup_link_datasheet_not_exists:          PuneHedgehog;
    api_params_lookup_target_field_not_exists:            PuneHedgehog;
    api_params_lookup_sort_field_not_exists:              PuneHedgehog;
    api_params_lookup_field_can_not_sort:                 PuneHedgehog;
    api_params_lookup_can_not_operate:                    PuneHedgehog;
    api_params_max_count_error:                           PuneHedgehog;
    api_params_max_error:                                 PuneHedgehog;
    api_params_max_length_error:                          PuneHedgehog;
    api_params_maxrecords_min_error:                      PuneHedgehog;
    api_params_member_field_records_max_count_error:      PuneHedgehog;
    api_params_min_error:                                 PuneHedgehog;
    api_params_multiselect_field_record_ids_must_unique:  PuneHedgehog;
    api_params_must_unique:                               PuneHedgehog;
    api_params_not_exists:                                PuneHedgehog;
    api_params_pagenum_min_error:                         PuneHedgehog;
    api_params_pagesize_max_error:                        PuneHedgehog;
    api_params_pagesize_min_error:                        PuneHedgehog;
    api_params_primary_field_not_allowed_to_delete:       PuneHedgehog;
    api_params_rating_field_max_error:                    PuneHedgehog;
    api_params_record_ids_must_unique:                    PuneHedgehog;
    api_params_recordids_empty_error:                     PuneHedgehog;
    api_params_records_empty_error:                       PuneHedgehog;
    api_params_records_max_count_error:                   PuneHedgehog;
    api_params_tree_select_can_not_operate:               PuneHedgehog;
    api_params_updated_time_can_not_operate:              PuneHedgehog;
    api_params_updatedby_can_not_operate:                 PuneHedgehog;
    api_query_params_invalid_fields:                      PuneHedgehog;
    api_query_params_view_id_not_exists:                  PuneHedgehog;
    api_request_success:                                  PuneHedgehog;
    api_server_error:                                     PuneHedgehog;
    api_set_view_lock_error:                              PuneHedgehog;
    api_space_capacity_over_limit:                        PuneHedgehog;
    api_unauthorized:                                     PuneHedgehog;
    api_update_error:                                     PuneHedgehog;
    api_upload_attachment_error:                          PuneHedgehog;
    api_upload_attachment_exceed_capacity_limit:          PuneHedgehog;
    api_upload_attachment_exceed_limit:                   PuneHedgehog;
    api_upload_attachment_not_editable:                   PuneHedgehog;
    api_upload_attachment_oversize:                       PuneHedgehog;
    api_upload_invalid_file:                              PuneHedgehog;
    api_upload_invalid_file_name:                         PuneHedgehog;
    api_view_fieldid_not_exist:                           PuneHedgehog;
    api_view_filter_conditions_empty_error:               PuneHedgehog;
    api_view_filter_operator_not_support:                 PuneHedgehog;
    api_view_filter_operator_value_error:                 PuneHedgehog;
    api_view_rules_empty_error:                           PuneHedgehog;
    api_view_type_error:                                  PuneHedgehog;
    api_org_enterprise_limit:                             PuneHedgehog;
    api_org_permission_team_deny:                         PuneHedgehog;
    api_org_permission_member_deny:                       PuneHedgehog;
    api_org_team_name_unique_error:                       PuneHedgehog;
    api_org_team_delete_error:                            PuneHedgehog;
    api_org_permission_role_deny:                         PuneHedgehog;
    api_org_role_name_unique_error:                       PuneHedgehog;
    api_org_role_delete_error:                            PuneHedgehog;
    api_org_member_team_error:                            PuneHedgehog;
    api_org_update_deny_for_social_space:                 PuneHedgehog;
    api_org_member_role_error:                            PuneHedgehog;
    api_org_member_delete_primary_admin_error:            PuneHedgehog;
    api_param_unit_name_required:                         PuneHedgehog;
    api_param_sequence_type_error:                        PuneHedgehog;
    api_param_parent_unit_not_exists:                     PuneHedgehog;
    api_param_unit_id_required:                           PuneHedgehog;
}

export interface PuneHedgehog {
    apiTypes?:      APITypes;
    code:           number;
    id:             string;
    isRecordTimes?: boolean;
    message?:       string;
    statusCode:     number;
}

export enum APITypes {
    FusionAPI = "fusion_api",
}
