<%@page contentType="text/html; charset=UTF-8" language="java"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=uft-8" />
<title></title>
<style type="text/css">

/*布局*/
body {
	background: #ffffff;
}

#box {
	margin: 0 auto;
	width: 640px;
	padding: 10px 0;
	position: relative;
	font-size: 11.0pt;
}

.print_submit {
	font-size: 14pt;
	text-align: center;
}

.print_submit button {
	font-size: 14px;
	padding: 5px;
	margin: 20px;
	text-align: center;
}

@media print {
	.noprint {
		display: none;
	}
}

.box_table {
	width: 100%;
	border: 0;
	border-collapse: collapse;
}

.box_table td {
	padding: 15px 5px;
	border: 1px dashed #ccc;
}

.info_box {
	width: 100%;
	border: 0;
	border-collapse: collapse;
}
.info_box th {
	border: 1px solid #333;
	text-align: center;
	padding: 5px;
	font-weight: bold;
}

.info_box td {
	border: 1px solid #333;
	text-align: center;
	padding: 5px;
}

.title_table {
	width: 100%;
	border: 0;
	border-collapse: collapse;
}

.title_table td {
	border: 0;
	padding: 0;
	font-weight: bold;
	font-size: 12pt;
}
</style>
</head>
<body>
	<div id="box">
		<div class="print_submit" class="noprint">
			<span class="noprint">第<s:property value="beginRoom" />&nbsp;至&nbsp;<s:property
								value="endRoom" />考场</span>
			<button id="print_btn" class="noprint"
				onclick="javascript:window.print();">批量打印</button>
		</div>
		<s:iterator value="resultExamineeVoQList" status="st1">
			<div style="font-size: 15pt;text-align: center;padding: 5px;font-weight: bold;border-bottom:0px double #ccc;padding-bottom: 5px;">
				缺考人员确认表《第<s:property value="subject"/>场》
							
			</div>
			<div style="padding: 3px;">
				<table class="title_table">
					<tr>
						<td style="text-align: left;" width="65%">
								<s:property value="resultExamineeVoQList[#st1.index][0].examPlaceName" />
						</td>
						<td width="15%">
							<span>考场号：<s:property value="resultExamineeVoQList[#st1.index][0].examRoom"/></span>
						</td>
						<td style="text-align: right;">
							缺考<s:property value="resultExamineeVoQList[#st1.index].size()"/>人
						</td>
					</tr>
				</table>
			</div>
			<table class="info_box">
				<tr>
					<th width="10%">座位号</th>
					<th width="20%">准考证号</th>
					<th width="20%">姓名</th>
					<!-- <th width="20%">证件号</th> -->
					<th>确认结果</th>
				</tr>
				<s:iterator value="resultExamineeVoQList[#st1.index]" status="st2">
					<tr>
						<td><strong><s:property value="seatNumber"/></strong></td>
						<td><s:property value="licence"/></td>
						<td><s:property value="examineeName"/></td>
						<%-- <td><s:property value="identity"/></td> --%>
						<td><input type="checkbox" />缺考<input type="checkbox" />实到(无违纪)<input type="checkbox" />无法确认<input type="checkbox" />违纪</td>
					</tr>
				</s:iterator>
			</table>
			<s:if test="!#st1.last">
				<div style="page-break-after:always;padding-bottom: 0px;clear: both;height: 15px;"></div>	
			</s:if>
		</s:iterator>
	</div>
</body>
</html>
