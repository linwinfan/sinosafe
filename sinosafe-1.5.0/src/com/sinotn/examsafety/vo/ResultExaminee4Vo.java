package com.sinotn.examsafety.vo;

import java.util.Date;

import com.sinotn.examsafety.po.ResultExaminee4;

public class ResultExaminee4Vo {

	private String licence;
	private String subject;
	private String imeiNo;
	private String relativePath;
	private String absolutePath;
	private Date createDate;
	private Date modifyDate;
	private Integer photoResult;
	private Boolean isPass;
	private Boolean isVerify;
	private Date verifyDate;
	private String verifyResult;
	private String faceExamineeName;
	private String faceIndetityDate;
	private String filename;
	private Boolean isProcess;
	private Integer photoPrecision;
	private String examProvince;
	private String examProvinceName;
	private String examArea;
	private String examAreaName;
	private Long examPlace;
	private String examPlaceName;
	private Long examRoom;
	private Byte seatNumber;
	private String examineeName;
	private String identity;
	private String photoPath;

	// Constructors

	/** default constructor */
	public ResultExaminee4Vo() {
	}

	/** minimal constructor */
	public ResultExaminee4Vo(String licence) {
		this.licence = licence;
	}

	/** full constructor */
	public ResultExaminee4Vo(ResultExaminee4 resultExaminee4) {
		this.licence = resultExaminee4.getLicence();
		this.subject = resultExaminee4.getSubject();
		this.imeiNo = resultExaminee4.getImeiNo();
		this.relativePath = resultExaminee4.getRelativePath();
		this.absolutePath = resultExaminee4.getAbsolutePath();
		this.createDate = resultExaminee4.getCreateDate();
		this.modifyDate = resultExaminee4.getModifyDate();
		this.photoResult = resultExaminee4.getPhotoResult();
		this.isPass = resultExaminee4.getIsPass();
		this.isVerify = resultExaminee4.getIsVerify();
		this.verifyDate = resultExaminee4.getVerifyDate();
		this.verifyResult = resultExaminee4.getVerifyResult();
		this.faceExamineeName = resultExaminee4.getFaceExamineeName();
		this.faceIndetityDate = resultExaminee4.getFaceIndetityDate();
		this.filename = resultExaminee4.getFilename();
		this.isProcess = resultExaminee4.getIsProcess();
		this.photoPrecision = resultExaminee4.getPhotoPrecision();
		this.examProvince = resultExaminee4.getExamProvince();
		this.examProvinceName = resultExaminee4.getExamProvinceName();
		this.examArea = resultExaminee4.getExamArea();
		this.examAreaName = resultExaminee4.getExamAreaName();
		this.examPlace = resultExaminee4.getExamPlace();
		this.examPlaceName = resultExaminee4.getExamPlaceName();
		this.examRoom = resultExaminee4.getExamRoom();
		this.seatNumber = resultExaminee4.getSeatNumber();
		this.examineeName = resultExaminee4.getExamineeName();
		this.identity = resultExaminee4.getIdentity();
		this.photoPath = resultExaminee4.getPhotoPath();
	}

	public String getLicence() {
		return licence;
	}

	public void setLicence(String licence) {
		this.licence = licence;
	}

	public String getSubject() {
		return this.subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getImeiNo() {
		return this.imeiNo;
	}

	public void setImeiNo(String imeiNo) {
		this.imeiNo = imeiNo;
	}

	public String getRelativePath() {
		return this.relativePath;
	}

	public void setRelativePath(String relativePath) {
		this.relativePath = relativePath;
	}

	public String getAbsolutePath() {
		return this.absolutePath;
	}

	public void setAbsolutePath(String absolutePath) {
		this.absolutePath = absolutePath;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return this.modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public Integer getPhotoResult() {
		return this.photoResult;
	}

	public void setPhotoResult(Integer photoResult) {
		this.photoResult = photoResult;
	}

	public Boolean getIsPass() {
		return isPass;
	}

	public void setIsPass(Boolean isPass) {
		this.isPass = isPass;
	}

	public Boolean getIsVerify() {
		return this.isVerify;
	}

	public void setIsVerify(Boolean isVerify) {
		this.isVerify = isVerify;
	}

	public Date getVerifyDate() {
		return this.verifyDate;
	}

	public void setVerifyDate(Date verifyDate) {
		this.verifyDate = verifyDate;
	}

	public String getVerifyResult() {
		return this.verifyResult;
	}

	public void setVerifyResult(String verifyResult) {
		this.verifyResult = verifyResult;
	}

	public String getFaceExamineeName() {
		return this.faceExamineeName;
	}

	public void setFaceExamineeName(String faceExamineeName) {
		this.faceExamineeName = faceExamineeName;
	}

	public String getFaceIndetityDate() {
		return this.faceIndetityDate;
	}

	public void setFaceIndetityDate(String faceIndetityDate) {
		this.faceIndetityDate = faceIndetityDate;
	}

	public String getFilename() {
		return this.filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public Boolean getIsProcess() {
		return isProcess;
	}

	public void setIsProcess(Boolean isProcess) {
		this.isProcess = isProcess;
	}

	public Integer getPhotoPrecision() {
		return photoPrecision;
	}

	public void setPhotoPrecision(Integer photoPrecision) {
		this.photoPrecision = photoPrecision;
	}

	public String getExamProvince() {
		return examProvince;
	}

	public void setExamProvince(String examProvince) {
		this.examProvince = examProvince;
	}

	public String getExamProvinceName() {
		return examProvinceName;
	}

	public void setExamProvinceName(String examProvinceName) {
		this.examProvinceName = examProvinceName;
	}

	public String getExamArea() {
		return examArea;
	}

	public void setExamArea(String examArea) {
		this.examArea = examArea;
	}

	public String getExamAreaName() {
		return examAreaName;
	}

	public void setExamAreaName(String examAreaName) {
		this.examAreaName = examAreaName;
	}

	public Long getExamPlace() {
		return examPlace;
	}

	public void setExamPlace(Long examPlace) {
		this.examPlace = examPlace;
	}

	public String getExamPlaceName() {
		return examPlaceName;
	}

	public void setExamPlaceName(String examPlaceName) {
		this.examPlaceName = examPlaceName;
	}

	public Long getExamRoom() {
		return examRoom;
	}

	public void setExamRoom(Long examRoom) {
		this.examRoom = examRoom;
	}

	public Byte getSeatNumber() {
		return seatNumber;
	}

	public void setSeatNumber(Byte seatNumber) {
		this.seatNumber = seatNumber;
	}

	public String getExamineeName() {
		return examineeName;
	}

	public void setExamineeName(String examineeName) {
		this.examineeName = examineeName;
	}

	public String getIdentity() {
		return identity;
	}

	public void setIdentity(String identity) {
		this.identity = identity;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}
	
}